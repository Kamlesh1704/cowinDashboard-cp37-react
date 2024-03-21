import {Component} from 'react'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import Loader from 'react-loader-spinner'
import './index.css'

class CowinDashboard extends Component {
  state = {
    apiStatus: 'initial',
    lastVaccination: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
  }
  componentDidMount() {
    this.getData()
  }

  getlastData = data => {
    const updated = data.map(each => ({
      dose1: each.dose_1,
      dose2: each.dose_2,
      vaccineDate: each.vaccine_date,
    }))
    return updated
  }

  getData = async () => {
    this.setState({apiStatus: 'loading'})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const lastVaccinationData = data.last_7_days_vaccination
      const vaccinationByAgeData = data.vaccination_by_age
      const vaccinationByGenderData = data.vaccination_by_gender
      const updatedLastData = this.getlastData(lastVaccinationData)
      this.setState({
        lastVaccination: updatedLastData,
        vaccinationByAge: vaccinationByAgeData,
        vaccinationByGender: vaccinationByGenderData,
        apiStatus: 'success',
      })
    } else {
      this.setState({apiStatus: 'failure'})
    }
  }

  renderComponent = () => {
    const {lastVaccination, vaccinationByAge, vaccinationByGender} = this.state
    return (
      <div>
        <VaccinationCoverage detail={lastVaccination} />
        <VaccinationByGender detail={vaccinationByGender} />
        <VaccinationByAge detail={vaccinationByAge} />
      </div>
    )
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailure = () => (
    <div className="divvv">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failureimg"
      />
      <h1 className="para">Something went wrong</h1>
    </div>
  )

  rendering = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'success':
        return this.renderComponent()
      case 'failure':
        return this.renderFailure()
      case 'loading':
        return this.renderLoading()
      default:
        return null
    }
  }
  render() {
    return (
      <div className="div-main">
        <div className="logo-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png "
            alt="website logo"
            className="logo"
          />
          <p className="heading">Co-win</p>
        </div>
        <h1 className="heading-2">CoWIN Vaccination in India</h1>
        {this.rendering()}
      </div>
    )
  }
}
export default CowinDashboard
