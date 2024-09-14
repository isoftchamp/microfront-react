import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<App name="app1" target="app2" />);
    expect(getByText(/Send message to app2/i)).toBeInTheDocument();
  });
});
