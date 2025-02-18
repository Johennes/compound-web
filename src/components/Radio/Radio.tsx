/*
Copyright 2023 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import classnames from "classnames";
import React, { forwardRef, PropsWithChildren } from "react";
import styles from "./Radio.module.css";

type RadioProps = {
  /**
   * The type of radio.
   */
  kind?: "primary" | "critical";
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * On mouse down callback for the radio.
   */
  onMouseDown?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
} & React.ComponentPropsWithoutRef<"input">;

/**
 * A radio component.
 */
export const Radio = forwardRef<
  HTMLInputElement,
  PropsWithChildren<RadioProps>
>(function Radio({ kind = "primary", className, onMouseDown, ...props }, ref) {
  const classes = classnames(styles.radio, className);
  return (
    <div className={classes} data-kind={kind}>
      <input
        ref={ref}
        {...props}
        type="radio"
        onMouseDown={(e) => {
          // Prevents the `focus` event from being fired when clicked
          // but still reliably works when navigating via the keyboard
          e.preventDefault();
          onMouseDown?.(e);
        }}
      />
      <div className={styles["radio-ui"]} />
    </div>
  );
});
