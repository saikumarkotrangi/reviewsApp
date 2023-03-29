// Write your code here
import {Component} from 'react'
import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

export default class ReviewsCarousel extends Component {
  state = {
    userDetailsIndex: 0,
  }

  render() {
    const {userDetailsIndex} = this.state

    const resultDetails = reviewsList.filter(
      eachObject =>
        eachObject.username === reviewsList[userDetailsIndex].username,
    )

    const listLastIndex = reviewsList.length

    this.rightButtonFunction = () => {
      if (userDetailsIndex < listLastIndex - 1) {
        this.setState(prevState => ({
          userDetailsIndex: prevState.userDetailsIndex + 1,
        }))
      }
    }

    this.leftButtonFunction = () => {
      if (userDetailsIndex > 0) {
        this.setState(prevState => ({
          userDetailsIndex: prevState.userDetailsIndex - 1,
        }))
      }
    }

    return (
      <>
        <div className="bg-container">
          <div className="btn-content-container">
            <button
              data-testid="leftArrow"
              onClick={this.leftButtonFunction}
              className="btn-style"
              type="button"
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <ul className="reviews-container">
              <li className="reviews-container">
                {resultDetails.map(eachObject => (
                  <>
                    <h1 className="reviews-heading">Reviews</h1>
                    <img alt={eachObject.username} src={eachObject.imgUrl} />
                    <p className="user-name">{eachObject.username}</p>
                    <p className="company-name">{eachObject.companyName}</p>
                    <p className="description">{eachObject.description}</p>
                  </>
                ))}
              </li>
            </ul>
            <button
              data-testid="rightArrow"
              onClick={this.rightButtonFunction}
              className="btn-style"
              type="button"
            >
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </>
    )
  }
}
