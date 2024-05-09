import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between pt-8 pb-6 items-center max-w-7xl mx-auto border-b-2 px-8'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;