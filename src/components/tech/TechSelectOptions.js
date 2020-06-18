import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../reducers/actions/techActions';

const TechSelectOptions = ({ getTechs, techs, loading }) => {
    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []); 

    return (
    !loading && techs !==null && techs.map( (tech, index) => <option key={index} value={`${tech.firstName} ${tech.lastName}` }>{ tech.firstName } {' '+tech.lastName }</option> )
    )
}

TechSelectOptions.propTypes = {
    techs : PropTypes.array,
    loading : PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    techs : state.tech.techs,
    loading: state.tech.loading
});
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
