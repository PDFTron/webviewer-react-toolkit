import classnames from 'classnames';
import React, { forwardRef, HTMLAttributes, MouseEvent, useImperativeHandle, useRef } from 'react';
import useOnKeyUp from '../../hooks/useOnKeyUp';
import { Omit } from '../../utils/typeUtils';

export interface ClickableDivProps extends Omit<HTMLAttributes<HTMLDivElement>, 'role' | 'tabIndex'> {
  /**
   * Is the clickable div disabled. Disabled will stop the onClick callback from
   * firing (similar to a button).
   */
  disabled?: boolean;
  /**
   * No style when focused. If true will have no focus outline.
   */
  noFocusStyle?: boolean;
  /**
   * Specify whether clickable div uses a pointer cursor. Otherwise is default.
   */
  usePointer?: boolean;
}

export const ClickableDiv = forwardRef<HTMLDivElement, ClickableDivProps>(
  ({ onClick, onKeyUp, disabled, noFocusStyle, usePointer, className, children, ...divProps }, ref) => {
    const divRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => divRef.current!);

    const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
      if (!disabled) onClick?.(event);
    };

    const handleKeyUp = useOnKeyUp(onKeyUp, divRef);

    const clickableDivClass = classnames(
      'ui__base ui__clickableDiv',
      {
        ['ui__clickableDiv--disabled']: disabled,
        ['ui__clickableDiv--noFocusStyle']: noFocusStyle,
        ['ui__clickableDiv--usePointer']: usePointer && !disabled,
      },
      className,
    );

    return (
      <div
        {...divProps}
        role="button"
        tabIndex={disabled ? -1 : 0}
        className={clickableDivClass}
        onClick={handleOnClick}
        onKeyUp={handleKeyUp}
        ref={divRef}
      >
        {children}
      </div>
    );
  },
);