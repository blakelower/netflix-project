import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from '../components/tab_nav/TabDoor'
import TabDevices from '../components/tab_nav/TabDevices'
import TabPrices from '../components/tab_nav/TabPrices'
import '../css/TabsNav.css';

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }
    render(){
        return(
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}> 
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'active' : null}`}><TabDoor/>
                        <p><strong>No Commitments<br/>
                        Cancel online at anytime</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'active' : null}`}><TabDevices/>
                        <p style={{marginTop: '-5.3125rem'}}><strong>Watch Anywhere</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'active' : null}`}><TabPrices/>
                        <p><strong>Pick your Price</strong></p>
                        </Tab>
                    </TabList>
                </Tabs>
            </div>
        )
    }
}
export default TabComponent;