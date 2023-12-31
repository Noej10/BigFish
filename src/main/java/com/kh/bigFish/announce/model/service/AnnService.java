package com.kh.bigFish.announce.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.kh.bigFish.announce.model.vo.Announce;
import com.kh.bigFish.common.model.vo.PageInfo;

public interface AnnService {
	int selectListCount();
	ArrayList<Announce> selectList(PageInfo pi);
	int InsertAnn(Announce a);
	int increaseCount(int annCount);
	Announce selectAnnounce(int annNo);
	int updateAnnounce(Announce a);
	int deleteAnn(int annNo);

	int selectSearchListCount(HashMap<String, String> map);
	ArrayList<Announce> selectSearchList(HashMap<String, String> map, PageInfo pi);
}
