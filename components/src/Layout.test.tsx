import * as React from "react";
import { render,
   // fireEvent,
   // act
} from '@testing-library/react';
import Layout  from "./Layout";

describe( 'Layout', () => {
    it('Lays it out', () => {
        const { container, getByText } = render(
            <Layout>Hi Roy</Layout>
        );
        expect(getByText('Hi Roy')).toBeTruthy();
        expect(container).toMatchSnapshot();
    });
})