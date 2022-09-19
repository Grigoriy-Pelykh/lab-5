import React from 'react';
import SourceButton from './SourceButton';

export default function SourcesBar(props) {
        return (
            <div id="sources" className="main-sources">
                <div class="drop">
                    <p>News Source</p>
                        <div class="dropdown_block">
                            <ul>
                                {props.sources.map((source) => {
                                    return (
                                        <li>
                                            <SourceButton id={source.id} key={source.id} clickHandler={props.clickHandler}>
                                                {source.name}
                                            </SourceButton>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                </div>
            </div>
        );
    }