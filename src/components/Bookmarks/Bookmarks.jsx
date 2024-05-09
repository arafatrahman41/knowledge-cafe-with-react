import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 my-8">
            <div className='bg-[#6047EC19] border-[#6047EC] border rounded-lg py-5 px-10 mb-6'>
                <h3 className='font-semibold text-lg text-[#6047EC]'>Spent time on reading: {readingTime}</h3>
            </div>
        <div className='bg-[#1111110C] p-6 rounded-lg'>
        <h2 className='text-2xl font-semibold'>Bookmarked Blogs: {bookmarks.length}</h2>
        {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
        </div>
    </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
};

export default Bookmarks;