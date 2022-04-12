import React from 'react';
import s from './profileinfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://www.wbcsd.org/var/site/storage/images/overview/news-insights/general/news/wbcsd-to-support-the-task-force-on-nature-related-financial-disclosures-tnfd/150706-1-eng-GB/WBCSD-to-support-the-Task-Force-on-Nature-related-Financial-Disclosures-TNFD_i1140.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+disc
            </div>
        </div>
    )
}

export default ProfileInfo;