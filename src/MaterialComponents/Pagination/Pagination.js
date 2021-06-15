import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from 'assets/jss/material-kit-react/components/paginationStyle.js';

const useStyles = makeStyles(styles);

export default function Pagination(props) {
   const classes = useStyles();
   const { pages, color, className } = props;
   const classNamesArray = [classes.pagination, className];

   return (
      <ul className={classNamesArray.join(' ')}>
         {pages.map((prop, key) => {
            const paginationLink = classNames({
               [classes.paginationLink]: true,
               [classes[color]]: prop.active,
               [classes.disabled]: prop.disabled,
            });
            return (
               <li className={classes.paginationItem} key={key}>
                  {prop.onClick !== undefined ? (
                     <Button onClick={prop.onClick} className={paginationLink}>
                        {prop.text}
                     </Button>
                  ) : (
                     <Button
                        onClick={() => pages[0].onClick(key)}
                        className={paginationLink}
                     >
                        {prop.text}
                     </Button>
                  )}
               </li>
            );
         })}
      </ul>
   );
}

Pagination.defaultProps = {
   color: 'primary',
};

Pagination.propTypes = {
   pages: PropTypes.arrayOf(
      PropTypes.shape({
         active: PropTypes.bool,
         disabled: PropTypes.bool,
         text: PropTypes.oneOfType([PropTypes.string]).isRequired,
         onClick: PropTypes.func,
      })
   ).isRequired,
   className: PropTypes.string,
   color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
};
