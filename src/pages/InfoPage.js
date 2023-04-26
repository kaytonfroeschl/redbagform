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
  import PrefPage from './PrefPage';
 
import SponsorCreateForm from '../ui-components/SponsorCreateForm';


function InfoPage() {
    const [formData, setFormData] = useState();
    const [testData, setTestData] = useState("THIS IS THE KEY!");


    console.log("INFO PAGE");
    console.log("This is Info Page data:", formData);

    return(
        <div>
            <p>info page</p>
            <p>{testData}</p>
            <PrefPage data={testData} />
            {/* <SponsorCreateForm onChange={fields => {setFormData(fields)}}/>
            <Button>
                <Link to="/sponsor-preference">Next</Link>
            </Button>

            <Route path="/sponsor-preference">
                <PrefPage data={testData}/>
            </Route> */}
            
        </div>
        
    );
}

export default InfoPage;