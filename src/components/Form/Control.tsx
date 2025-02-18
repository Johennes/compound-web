/*
Copyright 2023  New Vector Ltd

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

import React, { forwardRef, PropsWithChildren } from "react";
import { Control as RadixControl } from "@radix-ui/react-form";

import styles from "./form.module.css";
import classNames from "classnames";

type ControlProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & React.ComponentProps<typeof RadixControl>;

/**
 * Thin wrapper around Radix UI Control component
 * https://www.radix-ui.com/docs/primitives/components/form#control
 */
export const Control = forwardRef<
  HTMLInputElement,
  PropsWithChildren<ControlProps>
>(function Control({ children, ...props }, ref) {
  const classes = classNames(styles.control, props.className);
  return (
    <RadixControl ref={ref} {...props} className={classes}>
      {children}
    </RadixControl>
  );
});
