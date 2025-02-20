import {
  blurrable,
  clickable,
  fillable,
  focusable,
  interactor,
  property,
  text,
} from '@bigtest/interactor';

import ButtonInteractor from '@folio/stripes-components/lib/Button/tests/interactor';

export default interactor(class ControlledVocabInteractor {
  newButton = clickable('#clickable-add-institutions');
  disabledNewButton = property('#clickable-add-institutions', 'disabled');
  inputField = fillable('input[name="items[0].name"]');
  blurInputField = blurrable('input[name="items[0].name"]');
  focusInputField = focusable('input[name="items[0].name"]');

  fillInputField(value) {
    return this.focusInputField().inputField(value).blurInputField();
  }

  editButton = new ButtonInteractor('#clickable-edit-institutions-0');
  saveButton = clickable('#clickable-save-institutions-0');
  disabledSaveButton = property('#clickable-save-institutions-0', 'disabled');
  cancelButton = clickable('#clickable-cancel-institutions-0');
  emptyFieldError = text('#editList-institutions div[aria-rowindex="2"] div[role="alert"]')

  rowCount = 5;
});
