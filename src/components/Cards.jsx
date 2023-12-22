import { cards} from './data';

const ServiceCard = ({ card }) => (
      <div className='w-full shadow-xl flex flex-col p-4 my-10 ronded-lg hover:scale-105 duration-300'>
        <img
          className='w-20 mx-auto mt-[-5rem] bg-white'
          src={card.icon}
          alt='/'
        />
        <h2 className='text-center py-8 text-2xl font-bold'>{card.title}</h2>
        <p className='text-center text-4xl font-bold'>{card.price}</p>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-4'>{card.storage}</p>
          <p className='py-2 border-b mx-8 mt-4'>{card.user}</p>
          <p className='py-2 border-b mx-8 mt-4'>{card.space}</p>
        </div>
        <button className='bg-[#00df9b] w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 hover:bg-[#161625e7] hover:text-white ease-in-out duration-500 text-black'>
          Start Trial
        </button>
      </div>
)

const Cards = () => {
  return (
    <div className='w-full py-[8rem] px-4 bg-white mx-auto flex flex-wrap lg:flex-nowrap md:flex-wrap gap-8'>
      {cards.map((card, index) => (
        <ServiceCard key={index} card={card} />
      ))}
    </div>
  );
};

export default Cards;
