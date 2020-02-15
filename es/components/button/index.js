import React from 'react';
import { Icon } from '../icon';
export var Button = function Button(props) {
  var btnClass = function btnClass() {
    var result = '';
    var className = {
      btn: 'btn',
      lifted: props.lifted ? 'lifted' : '',
      loading: props.loading ? 'loading' : '',
      uppercase: props.uppercase ? 'uppercase' : '',
      smooth: props.smooth && !props.rounded ? 'smooth' : '',
      rounded: props.rounded && !props.smooth ? 'rounded' : '',
      color: props.color && !props.disabled && !props.loading && !props.light && !props.dark ? props.color : '',
      light: props.light && !props.dark ? 'light' : '',
      dark: props.dark && !props.light ? 'dark' : '',
      icon: props.icon && !props.name ? 'icon' : '',
      small: props.small ? 'small' : '',
      disabled: props.disabled || props.loading ? 'disabled' : '',
      size: props.size ? props.size : '',
      block: props.block ? 'block' : '',
      outlined: props.outlined ? 'outlined' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var setMargin = function setMargin() {
    if (props.icon && !props.iconLeft) return 'mr-5';else if (props.icon && props.iconLeft) return 'ml-5';else return '';
  };

  return React.createElement("button", {
    disabled: props.disabled || props.loading,
    className: btnClass(),
    onClick: function onClick(e) {
      return props.onClick ? props.onClick(e) : {};
    }
  }, props.loading ? React.createElement(Icon, {
    name: "loading",
    color: "gray"
  }) : React.createElement(React.Fragment, null, props.icon && props.iconLeft ? React.createElement(Icon, {
    size: 20,
    name: props.icon
  }) : '', props.name ? React.createElement("span", {
    className: setMargin()
  }, props.name) : '', props.icon && !props.iconLeft ? React.createElement(Icon, {
    size: 20,
    name: props.icon
  }) : ''));
};