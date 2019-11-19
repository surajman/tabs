import React from 'react';
import Tab from './Tab/Tab.jsx';
export class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: -1,
        }
        this.state = {
            activeTab: this.props.children[0].props.label,
          };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
      }

    render() {
        const {
            onClickTabItem,
            props: {
              children,
            },
            state: {
              activeTab,
            }
          } = this;
        return (
            <div className="tabs">
                <ul className="tabs-title">
                    {children.map((child) => {
                        const { label } = child.props;
                        return <Tab activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClickTabItem} />
                    })}
                </ul>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
            </div>
        );
    }
}