import { ToastProps } from '../../components';
import { AddToast, ToastContextValue } from '../../hooks/useToast';
import { Include } from '../../utils';

/* eslint-disable @typescript-eslint/no-unused-vars */

interface Test extends AddToast, Include<ToastProps, 'heading' | 'children' | 'message' | 'action'> {}

export function options(x: Test) {}
export function output(x: ToastContextValue) {}
