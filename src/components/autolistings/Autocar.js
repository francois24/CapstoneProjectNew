import Forestersubaru from '../cars/Forestersubaru';
import Miragerange from '../cars/Miragerange';
import Mitsubishilancer from '../cars/Mitsubishilancer';
import Pajerorange from '../cars/Pajerorange';
import Subaruliberty from '../cars/Subaruliberty';
import Xvrangesubaru from '../cars/Xvrangesubaru';
import '../../css/autocar.css'

function Autocar() {
  return (
    <div className='autocarall'>
        <div className='listcarbg'>
            <div className='listoverlay'>
                <h1>Auto Listings</h1>
            </div>
        </div>
        <div className='listcar'>
            <div className='mb-5'>
                <Forestersubaru/>
            </div>
            <div className='mb-5'>
                <Miragerange/>
            </div>
            <div className='mb-5'>
                <Mitsubishilancer/>
            </div>
        </div>
        <div className='listcar'>
            <div className='mb-5'>
                <Pajerorange/>
            </div>
            <div className='mb-5'>
                <Subaruliberty/>
            </div>
            <div className='mb-5'>
                <Xvrangesubaru/>
            </div>
        </div>
    </div>
  );
}

export default Autocar;