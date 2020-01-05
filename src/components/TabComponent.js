import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from '../components/tab_nav/TabDoor'
import TabDevices from '../components/tab_nav/TabDevices'
import TabPrices from '../components/tab_nav/TabPrices'
import '../css/TabsNav.css';

class TabComponent extends Component {
    render(){
        return(
            <div>
                <Tabs>
                    <TabList className="tab-list">
                        <Tab> <TabDoor/></Tab>
                        <Tab><TabDevices/></Tab>
                        <Tab><TabPrices/></Tab>
                    </TabList>
                </Tabs>
            </div>
        )
    }
}
export default TabComponent;