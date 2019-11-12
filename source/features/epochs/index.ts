import ApolloClient from 'apollo-client';
import { IBlocksFeature } from '../blocks';
// import Action from '../../lib/Action';
import { INetworkInfoFeature } from '../network-info';
import { EpochsApi } from './api';
import { EpochsStore } from './store';

/**
 * Defines the actions that are supported by this feature
 */
// export class EpochsActions {
//   public fetchMoreEpochs: Action<void> = new Action();
// }

/**
 * Defines the interface of this feature
 */
export interface IEpochsFeature {
  // actions: EpochsActions;
  api: EpochsApi;
  store: EpochsStore;
  start: () => void;
  stop: () => void;
}

/**
 * Interfaces to dependencies on other features:
 */
export interface IBlocksFeatureDependency {
  store: IBlocksFeature['store'];
}
export interface INetworkInfoFeatureDependency {
  store: INetworkInfoFeature['store'];
}

/**
 * Creates a new instance of this feature.
 *
 * This can be useful for testing, features that need to be
 * configured and / or displayed multiple times on the same page.
 */
export const createEpochsFeature = (
  blocks: IBlocksFeatureDependency,
  networkInfo: INetworkInfoFeatureDependency,
  apolloClient: ApolloClient<object>
): IEpochsFeature => {
  // const epochsActions = new EpochsActions();
  const epochsApi = new EpochsApi(apolloClient);
  const epochsStore = new EpochsStore(
    // epochsActions,
    blocks,
    epochsApi,
    networkInfo
  );
  return {
    // actions: epochsActions,
    api: epochsApi,
    store: epochsStore,
    start() {
      epochsStore.start();
    },
    stop() {
      epochsStore.stop();
    },
  };
};
