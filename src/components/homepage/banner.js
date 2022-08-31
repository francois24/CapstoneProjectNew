import '../../css/banner.css'
import 'bootstrap/dist/css/bootstrap.css'
import MaterialUIPickers from './datePicker'


export default function Banner() {
    return (
        <div className="bannerContainer container-fluid">
            <div className='row bannerRow d-flex align-items-center'>
                <div className='bannerCol col-sm-7 text-light d-flex justify-content-center'>
                    <div>
                        <h1>Book Your Auto Rental</h1>
                        <p>Luxury Cars at Low-cost, starts <span className='text-danger'>₱ 1k/day</span></p>
                        <p>from over 100 premium locations</p>
                    </div>
                </div>

                <div className='col-sm-5 d-flex justify-content-center'>
                    <div className='datepicker bg-light p-3 pt-5 pb-4'>
                        <MaterialUIPickers />
                    </div>
                </div>
            </div>
        </div>

    )
};