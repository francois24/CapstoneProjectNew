import React from 'react';
import Table from 'react-bootstrap/Table';

const Specifications = () => {
  return (
    <div className='specsall'>
        <Table>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>MAKE:</td>
                <td>subaru</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>MODEL:</td>
                <td>series 5</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>STOCK STATUS:</td>
                <td>in stock</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>MADE YEAR:</td>
                <td>2014</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>MILEAGE:</td>
                <td>4,980</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>VIN:</td>
                <td>234hdgsgf346</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>VERSION:</td>
                <td>1.3</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>FUEL:</td>
                <td>hybrid</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>ENGINE (CM3):</td>
                <td>16000</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>HORSEPOWER (HP):</td>
                <td>300</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>TRANSMISSION:</td>
                <td>manual</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>DOORS:</td>
                <td>2</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>CONDITION:</td>
                <td>barnfind</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>DRIVE:</td>
                <td>4x4 drive</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>SEATS:</td>
                <td>5</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>COLOR:</td>
                <td>gray</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>INTERIOR COLOR:</td>
                <td>orange</td>
            </tr>
            <tr>
                <td style={{fontWeight: 'bolder'}} colSpan={2}>WARRANTY:</td>
                <td>no</td>
            </tr>
        </Table>
    </div>
  )
}

export default Specifications
