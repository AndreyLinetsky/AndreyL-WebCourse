import Contact from './index';
import React from 'react';
import { mount, shallow } from "enzyme";
import { MemoryRouter } from 'react-router-dom'
import { Heading, Translate, Layout,InputField } from '../../components/';

describe('Contact outer tests', () => {
    let props;
    let mountedlayoutComponent;

    const contactComponent = () => {
        if (!mountedlayoutComponent) {
            mountedlayoutComponent = mount(
                <MemoryRouter>
                    <Contact />
                </MemoryRouter>
            );
        }
        return mountedlayoutComponent
    }

    beforeEach(() => {
        props = {};
        mountedlayoutComponent = undefined;
    });
    it('is Contact', () => {
        const ContactComponent = <Contact />;
        expect(ContactComponent.type).toBe(Contact)
    })

    it("always renders a section", () => {
        const sections = contactComponent().find("section");
        expect(sections.length).toBeGreaterThan(0);
    });
  
    it("has Heading", () => {
        expect(contactComponent().find(Heading).length).toBeGreaterThan(0)
    })

    it("has Layout", () => {
        expect(contactComponent().find(Layout).length).toBeGreaterThan(0)
    })

    it("has InputField Component", () => {
        expect(contactComponent().find(InputField).length).toBeGreaterThan(0)
    })

})

