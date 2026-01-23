import { ButtonSubclass } from './ButtonSubclass';
import { TextInputSubclass } from './TextInputSubclass';

function testComponents(): void {
  const loginButton = new ButtonSubclass('Im a Selector from TestComponent Child Class-button');
  const usernameInput = new TextInputSubclass('Im a Selector from TestComponent Child Class - TextInputSubclass');

  loginButton.click();
  loginButton.focus();
  usernameInput.enterText('test_user');
}

// Run the test
testComponents();