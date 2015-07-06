import {on} from 'flyd';

const inc = x => x + 1;

export default function createCounterPlugin(
  incrementAction$,
  output$
) {
  on(increment => {
    output$(inc)
  }, incrementAction$);
}
