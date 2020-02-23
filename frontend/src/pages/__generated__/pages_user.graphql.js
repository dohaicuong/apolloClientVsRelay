/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type pages_user$ref: FragmentReference;
declare export opaque type pages_user$fragmentType: pages_user$ref;
export type pages_user = {|
  +email: string,
  +name: string,
  +createdAt: ?any,
  +$refType: pages_user$ref,
|};
export type pages_user$data = pages_user;
export type pages_user$key = {
  +$data?: pages_user$data,
  +$fragmentRefs: pages_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "pages_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f0632726fa5161a82b4bcd0f5d9351e1';

module.exports = node;
