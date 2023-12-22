import { Dataimage } from '../assets';
import Button from './Button';

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='mx-auto grid md:grid-cols-2'>
        <img className='w-[600px] mx-auto my-4' src={Dataimage} alt='/' />
        <div className='pl-6 flex flex-col justify-center'>
          <p className='text-[#00df9b] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto
            hic sed voluptatum tempora ipsa, officiis provident totam. Ut et
            repudiandae, totam repellendus voluptatum soluta dolores deserunt!
            Incidunt, similique vel!
          </p>
          <Button text={'Get Started'} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
