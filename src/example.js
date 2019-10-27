import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
]

const DropdownExampleSimple = () => (
    <Menu compact>
        <Dropdown text='Dropdown' options={options} simple item />
    </Menu>
)

export default DropdownExampleSimple
    < div class="ui compact menu" >
        <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
            <div class="text" role="alert" aria-live="polite" aria-atomic="true">Dropdown</div>
            <i aria-hidden="true" class="dropdown icon"></i>
            <div class="menu transition">
                <div
                    style="pointer-events:all"
                    role="option"
                    aria-checked="false"
                    aria-selected="true"
                    class="selected item"
                >
                    <span class="text">Choice 1</span>
                </div>
                <div
                    style="pointer-events:all"
                    role="option"
                    aria-checked="false"
                    aria-selected="false"
                    class="item"
                >
                    <span class="text">Choice 2</span>
                </div>
                <div
                    style="pointer-events:all"
                    role="option"
                    aria-checked="false"
                    aria-selected="false"
                    class="item"
                >
                    <span class="text">Choice 3</span>
                </div>
            </div>
        </div>
</div >