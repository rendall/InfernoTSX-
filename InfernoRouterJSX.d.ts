// This is a lightly modified version of the react-router typedefs, to be used alongside InfernoJSX.d.ts: https://gist.github.com/rendall/cdd23c962c88fac3dbd9322cc2b09d58
// Please do let me know of any problems or issues: https://github.com/rendall

// Type definitions for React Router 4.0
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>
//                 Yuichi Murata <https://github.com/mrk21>
//                 Václav Ostrožlík <https://github.com/vasek17>
//                 Nathan Brown <https://github.com/ngbrown>
//                 Alex Wendland <https://github.com/awendland>
//                 Kostya Esmukov <https://github.com/KostyaEsmukov>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Karol Janyst <https://github.com/LKay>
//                 Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Tanguy Krotoff <https://github.com/tkrotoff>
//                 Huy Nguyen <https://github.com/huy-nguyen>
//                 Jérémy Fauvel <https://github.com/grmiade>
//                 Daniel Roth <https://github.com/DaIgeb>
//                 Egor Shulga <https://github.com/egorshulga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as InfernoJSX from './InfernoJSX';
import * as H from 'history';
import { IRouteProps } from 'inferno-router/Route';

// This is the type of the context object that will be passed down to all children of
// a `Router` component:
export interface RouterChildContext<P> {
  router: {
    history: H.History
    route: {
      location: H.Location
      match: match<P>
    }
  };
}
export interface MemoryRouterProps {
  initialEntries?: H.LocationDescriptor[];
  initialIndex?: number;
  getUserConfirmation?: (() => void);
  keyLength?: number;
}

export class MemoryRouter extends InfernoJSX.Component<MemoryRouterProps> { }

export interface PromptProps {
  message: string | ((location: H.Location) => void);
  when?: boolean;
}
export class Prompt extends InfernoJSX.Component<PromptProps> { }

export interface RedirectProps {
  to: H.LocationDescriptor;
  push?: boolean;
  from?: string;
  path?: string;
  exact?: boolean;
  strict?: boolean;
}
export class Redirect extends InfernoJSX.Component<RedirectProps> { }

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface RouteProps {
  location?: H.Location;
  component?: InfernoJSX.ComponentType<RouteComponentProps<any> | {}>;
  render?: ((props: RouteComponentProps<any>) => InfernoJSX.InfernoJSXNode);
  children?: ((props: RouteComponentProps<any>) => InfernoJSX.InfernoJSXNode) | InfernoJSX.InfernoJSXNode;
  path?: string;
  exact?: boolean;
  strict?: boolean;
}
export class Route<T extends RouteProps = RouteProps> extends InfernoJSX.Component<T> { }

export interface RouterProps {
  history: any;
}
export class Router extends InfernoJSX.Component<RouterProps> { }

export interface StaticRouterProps {
  basename?: string;
  location?: string | object;
  context?: object;
}

export class StaticRouter extends InfernoJSX.Component<StaticRouterProps> { }
export interface SwitchProps {
  children?: InfernoJSX.InfernoJSXNode;
  location?: H.Location;
}
export class Switch extends InfernoJSX.Component<SwitchProps> { }

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export function matchPath<P>(pathname: string, props: RouteProps): match<P> | null;
export function withRouter<P>(component: InfernoJSX.ComponentType<RouteComponentProps<any> & P>): InfernoJSX.ComponentClass<P>;
// decorator signature
export function withRouter<P, TFunction extends InfernoJSX.ComponentClass<P>>(target: TFunction): TFunction;
