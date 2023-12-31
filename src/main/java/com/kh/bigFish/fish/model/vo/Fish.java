package com.kh.bigFish.fish.model.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Fish {
	private int fishNo;
	private String fishName;
	private String fishContent;
	private int fishCount;
	private String fishStatus;
	private String fishType;
	private String fishTitleImage;
}
