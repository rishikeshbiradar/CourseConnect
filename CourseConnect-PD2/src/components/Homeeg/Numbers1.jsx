import "./numbers1.css";
import AOS from 'aos';

const Numbers1 = ({ number, title }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      // paddingLeft:'10px'
    }}>
      <div className='numbers1-subdiv'
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        data-aos-delay="3000"
      >
        <div className="numbers1-no1">500</div>
        <div className="numbers1-text1">Users</div>
      </div>
      <div className='numbers1-subdiv'
        data-aos="fade"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        data-aos-delay="3000"
      >
        <div className="numbers1-no1">7000</div>
        <div className="numbers1-text1">Courses</div>
      </div>
      <div className='numbers1-subdiv'
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        data-aos-delay="3000"
      >
        <div className="numbers1-no1">3</div>
        <div className="numbers1-text1">Platforms</div>
      </div>
    </div>
  );
};

export default Numbers1;
