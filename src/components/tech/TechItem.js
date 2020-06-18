import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../reducers/actions/techActions';

const TechItem = ({ tech, deleteTech }) => {
    const deleteHandler = (e) => {
        e.preventDefault();
        deleteTech(tech.id);
        M.toast({ html: 'Tech deleted successfully' });

    }
    return (
        <li className="collection-item">
            <div>
                {tech.firstName} - {tech.lastName}
                <a href=" " className="secondary-content " onClick={deleteHandler} >
                    <i className="material-icons grey-text">delete</i>

                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech : PropTypes.object.isRequired,
}

export default connect(null, { deleteTech })(TechItem);
