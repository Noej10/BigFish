package com.kh.bigFish.attachment.model.vo;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Attachment {

	private int fileNo;
	private String originName;
	private String changeName;
	private String filePath;
	private Date uploadDate;
	private int fileLevel;
	private String fileStatus;
	private int rfishNo;
	private int rproductNo;
	private int rfishingNo;
	private int rstoreNo;
}
