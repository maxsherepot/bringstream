import { all, takeEvery } from 'redux-saga/effects'
import { Types as AuthorizationTypes } from '../store/authorization/actions'
import { Types as ProfileTypes } from '../store/profile/actions'
import { Types as ChannelsTypes } from '../store/channels/actions'
import { Types as PlaylistsTypes } from '../store/playlists/actions'
import LayoutSaga from './../store/layout/saga'

import {
    watchlogin,
    watchRegisterUser,
    watchForgotPassword,
} from './authorization'

import {
    watchGetUserProfile,
    watchChangeUserProfile,
} from './profile'

import {
    watchAddChannel,
    watchGetChannels,
    watchDeleteChannel,
    watchUpdateChannel,
} from './channels'

import {
    watchAddPlaylist,
    watchGetPlaylists,
    watchDeletePlaylist,
    watchUpdatePlaylist
} from './playlists'

export function* rootSaga() {
    yield all([
        takeEvery(AuthorizationTypes.LOGIN_REQUEST, watchlogin),
        takeEvery(AuthorizationTypes.REGISTER_USER_REQUEST, watchRegisterUser),
        takeEvery(AuthorizationTypes.FORGOT_PASSWORD_REQUEST, watchForgotPassword),
        
        takeEvery(ProfileTypes.GET_USER_PROFILE_REQUEST, watchGetUserProfile),
        takeEvery(ProfileTypes.CHANGE_USER_PROFILE_REQUEST, watchChangeUserProfile),
        
        takeEvery(ChannelsTypes.ADD_CHANNEL_REQUEST, watchAddChannel),
        takeEvery(ChannelsTypes.GET_CHANNELS_REQUEST, watchGetChannels),
        takeEvery(ChannelsTypes.DELETE_CHANNEL_REQUEST, watchDeleteChannel),
        takeEvery(ChannelsTypes.UPDATE_CHANNEL_REQUEST, watchUpdateChannel),
        
        takeEvery(PlaylistsTypes.ADD_PLAYLIST_REQUEST, watchAddPlaylist),
        takeEvery(PlaylistsTypes.GET_PLAYLISTS_REQUEST, watchGetPlaylists),
        takeEvery(PlaylistsTypes.DELETE_PLAYLIST_REQUEST, watchDeletePlaylist),
        takeEvery(PlaylistsTypes.UPDATE_PLAYLIST_REQUEST, watchUpdatePlaylist),

        LayoutSaga(),
    ])
}