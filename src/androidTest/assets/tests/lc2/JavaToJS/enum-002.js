/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

gTestfile = 'enum-002.js';

/**
   File Name:          enum-002.js
   Section:            LiveConnect
   Description:

   Tests enumeration of a java object.  This also does some
   conversions.

   Regression test for bug:

   http://scopus.mcom.com/bugsplat/show_bug.cgi?id=107638

   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "enum-002";
var VERSION = "JS1_3";
var TITLE   = "The variable statement";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

var v = new java.util.Vector();
v.addElement("TRUE");

for (e = v.elements(), result = new Array(), i = 0 ; e.hasMoreElements();
     i++ )
{
  result[i] = (new java.lang.Boolean(e.nextElement())).booleanValue();
}

for ( i = 0; i < result.length; i++ ) {
  new TestCase( SECTION,
		"test enumeration of a java object:  element at " + i,
		"true",
		String( result[i] ) );
}

test();

