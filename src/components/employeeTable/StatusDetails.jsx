import React from 'react'
import { ReactComponent as ArchiveSVG } from '../../assets/archive.svg';

export default function StatusDetails({ currentStatus, onStatusChange }) {
    const statues = ['ADDED', 'IN-CHECK', 'APPROVED', 'ACTIVE', 'INACTIVE'];
    const indexOfStatus = statues.findIndex((status) => status === currentStatus)

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='status-details'>
                {
                    statues.map((item, index) => (
                        <div key={index} className={`status-box ${indexOfStatus >= index ? 'active' : ''}`} onClick={() => onStatusChange(item)}>
                            <span>{item}</span>
                            {
                                indexOfStatus >= index &&
                                <span style={{ alignSelf: 'flex-start', marginTop: '0rem' }}><ArchiveSVG /></span>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
