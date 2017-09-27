import Login from './index';
import React from 'react';
import { mount, shallow } from "enzyme";
import { MemoryRouter } from 'react-router-dom'
import { Heading, Translate, Layout } from '../../components/';
import { Link } from 'react-router-dom';

describe('Login outer tests', () => {
    let props;
    let mountedlayoutComponent;

    const loginComponent = () => {
        if (!mountedlayoutComponent) {
            mountedlayoutComponent = mount(
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            );
        }
        return mountedlayoutComponent
    }

    beforeEach(() => {
        props = {};
        mountedlayoutComponent = undefined;
    });
    it('is Login', () => {
        const LoginComponent = <Login />;
        expect(LoginComponent.type).toBe(Login)
    })

    it("always renders a section", () => {
        const sections = loginComponent().find("section");
        expect(sections.length).toBeGreaterThan(0);
    });

    it("always renders a button", () => {
        const button = loginComponent().find("button");
        expect(button.length).toBeGreaterThan(0);
    });

    it("has Translate", () => {
        expect(loginComponent().find(Translate).length).toBeGreaterThan(0)
    })

    it("has Heading", () => {
        expect(loginComponent().find(Heading).length).toBeGreaterThan(0)
    })

    it("has Layout", () => {
        expect(loginComponent().find(Layout).length).toBeGreaterThan(0)
    })

    it("has Link Component", () => {
        expect(loginComponent().find(Link).length).toBeGreaterThan(0)
    })

})

