import React from 'react'
import { Ireview } from '../../interfaces/IReview'
import './ReviewsList.scss'

const ReviewsList = ({ reviewData }: { reviewData: Ireview[] }) => {
  return (
    <ul className="reviews-list">
      {reviewData.map((item: Ireview) => {

        const { userName, reviewDate, userRating, userMessage } = item

        return (
          <li key={item.userRating.toString()} className="reviews-list__item review">
            <div className="review__header">
              <h3 className="review__username">{userName}</h3>
              <span className="review__date">{reviewDate}</span>
            </div>
            <p className="review__rating"><b>Оценка:</b> {userRating}</p>
            <div className="review__body">
              <h4 className="review__message-title">Отзыв</h4>
              <p className="review__user-message">
                {userMessage}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ReviewsList