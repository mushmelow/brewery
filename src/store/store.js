import { configureStore } from '@reduxjs/toolkit';

import { reducer as breweries } from './breweries';
import { reducer as brewery } from './brewery';
import { reducer as page } from './page';
import { reducer as loading } from './loading';
import { reducer as searchKey } from './searchKey';

export default configureStore({
    reducer: { breweries, brewery, page, loading, searchKey },
});
