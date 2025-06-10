import BookmarkIcon from './BookmarkIcon';

export default function JobListItem() {
  return (
    <li className={`job-item `}>
      <a className='job-item__link'>
        <div className='job-item__badge'>badgeLetters</div>

        <div className='job-item__middle'>
          <h3 className='third-heading'>title</h3>
          <p className='job-item__company'>company</p>
        </div>

        <div className='job-item__right'>
          <BookmarkIcon />
          <time className='job-item__time'>daysAgo</time>
        </div>
      </a>
    </li>
  );
}
