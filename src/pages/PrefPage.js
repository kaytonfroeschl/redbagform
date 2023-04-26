import * as React from "react";
import { useState } from 'react';
import {
    Button,
    Flex,
    Grid,
    SelectField,
    SwitchField,
    TextField,
  } from "@aws-amplify/ui-react";
import Route from '../components/Route';
import Link from '../components/Link';
import ReviewPage from "./ReviewPage";
import InfoPage from "./InfoPage";

import ChildrenPreference from '../ui-components/ChildrenPreference';

function PrefPage({ data }) {
    console.log("PREF PAGE");
    console.log("this is pref page data:", data);

    return (
    /* <div>
        <ChildrenPreference/>
        <Button>
                <Link to="/">Previous</Link>
        </Button>
        <Route path="/">
                <InfoPage/>
        </Route>
    </div> */
    <p>pref page</p>
    
    );
}

export default PrefPage;