import React from 'react'
import {AttachMoneyOutlined} from '@material-ui/icons'

const PriceIcon = ({price}) => {
	if (price === 1) {
		return (
			<span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
      </span>
		);
	} else if (price === 2) {
		return (
			<span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
      </span>
		);
	} else if (price === 3) {
		return (
			<span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
      </span>
		);
	} else {
		return (
			<span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
      </span>
		);
	}
};

export default PriceIcon
