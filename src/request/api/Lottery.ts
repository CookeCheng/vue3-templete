import { get, post } from '../methods';
import BaseRequest from './BaseRequest';

export default class Lottery extends BaseRequest {
  /**
   * pc端登录
   */
  @post('/api/lottery/user/loginPC')
  loginPC(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * pc端登录
   */
  @post('/api/lottery/user/loginPCByCode')
  loginPCByCode(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 重置密码
   */
  @post('/api/lottery/user/resetPassword')
  resetPassword(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 获取用户信息
   */
  @get('/api/lottery/user/getUserInfo')
  getUserInfo(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 通过房间id获取房间信息
   */
  @get('/api/lottery/room/getRoomById')
  getRoomById(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 通过房间名称获取房间信息
   */
  @get('/api/lottery/room/getRoomByName')
  getRoomByName(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 创建房间
   */
  @post('/api/lottery/room/create')
  createRoom(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 更新房间信息
   */
  @post('/api/lottery/room/update')
  updateRoom(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 上传房间主图
   */
  @post('/api/lottery/room/uploadMainGraph')
  uploadRoomMainGraph(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 删除房间主图
   */
  @post('/api/lottery/room/delRoomMainGraph')
  delRoomMainGraph(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 根据用户id获取用户创建的所有房间
   */
  @get('/api/lottery/room/getRoomsByUserId')
  getRoomsByUserId(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 验证房间密码
   */
  @post('/api/lottery/room/verifyPassword')
  verifyPassword(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 用户退出房间
   */
  @post('/api/lottery/room/userExitRoom')
  userExitRoom(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 获取房间内所有的奖项和奖品
   */
  @get('/api/lottery/awards/getAwardsAndPrizes')
  getAwardsAndPrizes(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 批量创建奖项
   */
  @post('/api/lottery/awards/batchCreate')
  batchCreateAwards(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 通过id删除奖项
   */
  @post('/api/lottery/awards/delete')
  deleteAwards(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 更新奖项
   */
  @post('/api/lottery/awards/update')
  updateAwards(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 批量创建奖品
   */
  @post('/api/lottery/prize/batchCreate')
  batchCreatePrizes(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 根据id删除奖品
   */
  @post('/api/lottery/prize/delete')
  deletePrizs(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 根据id数组批量删除奖品
   */
  @post('/api/lottery/prize/batchDelete')
  batchDeletePrizes(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 更新奖品
   */
  @post('/api/lottery/prize/update')
  updatePrize(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 生成房间二维码
   */
  @post('/api/lottery/room/createRoomQRCode')
  createRoomQRCode(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }

  /**
   * 获取指定房间内所有参与抽奖的用户
   */
  @get('/api/lottery/user/getUsersListByRoomId')
  getUsersListByRoomId(opts: any): Promise<any> {
    return this._requestFormat(opts);
  }
}
