import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';


export default function Dashboard() {
    return(
        <section className="dash-container container-fluid">
             <Link to="/signup">
                <div className="dash-cards card-deck">
                    <div className="card">
                        <div className="card-body">
                            Sets Goes Here
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    )
};