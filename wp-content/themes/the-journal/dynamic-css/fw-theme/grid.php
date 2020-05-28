/* Grid system */
/* -------------------------------------------------- */
/* this position is important for 1/5 column because make conflicts on responsive */
@media (min-width: 768px) {
	.fw-col-sm-1-5 {
		width: 20%;
	}
}
.fw-container,
.fw-container *,
.fw-container *:before,
.fw-container *:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.fw-container {
	position: relative;
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px;
}
.fw-container:before,
.fw-container:after {
	content: " ";
	display: table;
}
.fw-container:after {
	clear: both;
}
@media (min-width: 768px) {
	.fw-container {
		width: 750px;
	}
}
@media (min-width: 992px) {
	.fw-container {
		width: 970px;
	}
}
@media (min-width: 1200px) {
	.fw-container {
		width: 1170px;
	}
}
.fw-container-fluid {
	position: relative;
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px;
}
.fw-container-fluid:before,
.fw-container-fluid:after {
	content: " ";
	display: table;
}
.fw-container-fluid:after {
	clear: both;
}
.fw-row {
	margin-left: -15px;
	margin-right: -15px;
}
.fw-row:before,
.fw-row:after {
	content: " ";
	display: table;
}
.fw-row:after {
	clear: both;
}
.fw-row:before,
.fw-row:after {
	content: " ";
	display: table;
}
.fw-row:after {
	clear: both;
}
.fw-row:before,
.fw-row:after {
	content: " ";
	display: table;
}
.fw-row:after {
	clear: both;
}
.fw-col-xs-1, .fw-col-sm-1, .fw-col-md-1, .fw-col-lg-1, .fw-col-xs-2, .fw-col-sm-2, .fw-col-md-2, .fw-col-lg-2, .fw-col-xs-3, .fw-col-sm-3, .fw-col-md-3, .fw-col-lg-3, .fw-col-xs-4, .fw-col-sm-4, .fw-col-md-4, .fw-col-lg-4, .fw-col-xs-5, .fw-col-sm-5, .fw-col-md-5, .fw-col-lg-5, .fw-col-xs-6, .fw-col-sm-6, .fw-col-md-6, .fw-col-lg-6, .fw-col-xs-7, .fw-col-sm-7, .fw-col-md-7, .fw-col-lg-7, .fw-col-xs-8, .fw-col-sm-8, .fw-col-md-8, .fw-col-lg-8, .fw-col-xs-9, .fw-col-sm-9, .fw-col-md-9, .fw-col-lg-9, .fw-col-xs-10, .fw-col-sm-10, .fw-col-md-10, .fw-col-lg-10, .fw-col-xs-11, .fw-col-sm-11, .fw-col-md-11, .fw-col-lg-11, .fw-col-xs-12, .fw-col-sm-12, .fw-col-md-12, .fw-col-lg-12,
.fw-col-md-1-5,
.fw-col-sm-1-5 {
	position: relative;
	min-height: 1px;
	padding-left: 15px;
	padding-right: 15px;
}
@media (max-width: 767px) {
	div[class^="fw-col-sm-"],
	div[class^="fw-col-md-"],
	div[class^="fw-col-xs-"] {
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.single .fw-page-builder-content .fw-main-row-top div[class^="fw-col-sm-"],
	.single .fw-page-builder-content .fw-main-row-top div[class^="fw-col-ms-"],
	.single .fw-page-builder-content .fw-main-row-top div[class^="fw-col-xs-"] {
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.fw-main-row-top div[class^="fw-col-sm-"],
	.fw-main-row-top div[class^="fw-col-ms-"],
	.fw-main-row-top div[class^="fw-col-xs-"] {
		padding-top: 0;
		padding-bottom: 0;
	}
}
@media (min-width: 768px) {
	.fw-col-sm-1, .fw-col-sm-2, .fw-col-sm-3, .fw-col-sm-4, .fw-col-sm-5, .fw-col-sm-6, .fw-col-sm-7, .fw-col-sm-8, .fw-col-sm-9, .fw-col-sm-10, .fw-col-sm-11, .fw-col-sm-12,
	.fw-col-md-1-5,
	.fw-col-sm-1-5 {
		float: left;
	}
	.fw-col-sm-12 {
		width: 100%;
	}
	.fw-col-sm-11 {
		width: 91.66666667%;
	}
	.fw-col-sm-10 {
		width: 83.33333333%;
	}
	.fw-col-sm-9 {
		width: 75%;
	}
	.fw-col-sm-8 {
		width: 66.66666667%;
	}
	.fw-col-sm-7 {
		width: 58.33333333%;
	}
	.fw-col-sm-6 {
		width: 50%;
	}
	.fw-col-sm-5 {
		width: 41.66666667%;
	}
	.fw-col-sm-4 {
		width: 33.33333333%;
	}
	.fw-col-sm-3 {
		width: 25%;
	}
	.fw-col-sm-2 {
		width: 16.66666667%;
	}
	.fw-col-sm-1 {
		width: 8.33333333%;
	}
	.fw-col-sm-pull-12 {
		right: 100%;
	}
	.fw-col-sm-pull-11 {
		right: 91.66666667%;
	}
	.fw-col-sm-pull-10 {
		right: 83.33333333%;
	}
	.fw-col-sm-pull-9 {
		right: 75%;
	}
	.fw-col-sm-pull-8 {
		right: 66.66666667%;
	}
	.fw-col-sm-pull-7 {
		right: 58.33333333%;
	}
	.fw-col-sm-pull-6 {
		right: 50%;
	}
	.fw-col-sm-pull-5 {
		right: 41.66666667%;
	}
	.fw-col-sm-pull-4 {
		right: 33.33333333%;
	}
	.fw-col-sm-pull-3 {
		right: 25%;
	}
	.fw-col-sm-pull-2 {
		right: 16.66666667%;
	}
	.fw-col-sm-pull-1 {
		right: 8.33333333%;
	}
	.fw-col-sm-pull-0 {
		right: auto;
	}
	.fw-col-sm-push-12 {
		left: 100%;
	}
	.fw-col-sm-push-11 {
		left: 91.66666667%;
	}
	.fw-col-sm-push-10 {
		left: 83.33333333%;
	}
	.fw-col-sm-push-9 {
		left: 75%;
	}
	.fw-col-sm-push-8 {
		left: 66.66666667%;
	}
	.fw-col-sm-push-7 {
		left: 58.33333333%;
	}
	.fw-col-sm-push-6 {
		left: 50%;
	}
	.fw-col-sm-push-5 {
		left: 41.66666667%;
	}
	.fw-col-sm-push-4 {
		left: 33.33333333%;
	}
	.fw-col-sm-push-3 {
		left: 25%;
	}
	.fw-col-sm-push-2 {
		left: 16.66666667%;
	}
	.fw-col-sm-push-1 {
		left: 8.33333333%;
	}
	.fw-col-sm-push-0 {
		left: auto;
	}
	.fw-col-sm-offset-12 {
		margin-left: 100%;
	}
	.fw-col-sm-offset-11 {
		margin-left: 91.66666667%;
	}
	.fw-col-sm-offset-10 {
		margin-left: 83.33333333%;
	}
	.fw-col-sm-offset-9 {
		margin-left: 75%;
	}
	.fw-col-sm-offset-8 {
		margin-left: 66.66666667%;
	}
	.fw-col-sm-offset-7 {
		margin-left: 58.33333333%;
	}
	.fw-col-sm-offset-6 {
		margin-left: 50%;
	}
	.fw-col-sm-offset-5 {
		margin-left: 41.66666667%;
	}
	.fw-col-sm-offset-4 {
		margin-left: 33.33333333%;
	}
	.fw-col-sm-offset-3 {
		margin-left: 25%;
	}
	.fw-col-sm-offset-2 {
		margin-left: 16.66666667%;
	}
	.fw-col-sm-offset-1 {
		margin-left: 8.33333333%;
	}
	.fw-col-sm-offset-0 {
		margin-left: 0%;
	}
}
@media (min-width: 992px) {
	.fw-col-md-1, .fw-col-md-2, .fw-col-md-3, .fw-col-md-4, .fw-col-md-5, .fw-col-md-6, .fw-col-md-7, .fw-col-md-8, .fw-col-md-9, .fw-col-md-10, .fw-col-md-11, .fw-col-md-12,
	.fw-col-md-1-5,
	.fw-col-sm-1-5 {
		float: left;
	}
	.fw-col-md-12 {
		width: 100%;
	}
	.fw-col-md-11 {
		width: 91.66666667%;
	}
	.fw-col-md-10 {
		width: 83.33333333%;
	}
	.fw-col-md-9 {
		width: 75%;
	}
	.fw-col-md-8 {
		width: 66.66666667%;
	}
	.fw-col-md-7 {
		width: 58.33333333%;
	}
	.fw-col-md-6 {
		width: 50%;
	}
	.fw-col-md-5 {
		width: 41.66666667%;
	}
	.fw-col-md-4 {
		width: 33.33333333%;
	}
	.fw-col-md-3 {
		width: 25%;
	}
	.fw-col-md-2 {
		width: 16.66666667%;
	}
	.fw-col-md-1 {
		width: 8.33333333%;
	}
	.fw-col-md-pull-12 {
		right: 100%;
	}
	.fw-col-md-pull-11 {
		right: 91.66666667%;
	}
	.fw-col-md-pull-10 {
		right: 83.33333333%;
	}
	.fw-col-md-pull-9 {
		right: 75%;
	}
	.fw-col-md-pull-8 {
		right: 66.66666667%;
	}
	.fw-col-md-pull-7 {
		right: 58.33333333%;
	}
	.fw-col-md-pull-6 {
		right: 50%;
	}
	.fw-col-md-pull-5 {
		right: 41.66666667%;
	}
	.fw-col-md-pull-4 {
		right: 33.33333333%;
	}
	.fw-col-md-pull-3 {
		right: 25%;
	}
	.fw-col-md-pull-2 {
		right: 16.66666667%;
	}
	.fw-col-md-pull-1 {
		right: 8.33333333%;
	}
	.fw-col-md-pull-0 {
		right: auto;
	}
	.fw-col-md-push-12 {
		left: 100%;
	}
	.fw-col-md-push-11 {
		left: 91.66666667%;
	}
	.fw-col-md-push-10 {
		left: 83.33333333%;
	}
	.fw-col-md-push-9 {
		left: 75%;
	}
	.fw-col-md-push-8 {
		left: 66.66666667%;
	}
	.fw-col-md-push-7 {
		left: 58.33333333%;
	}
	.fw-col-md-push-6 {
		left: 50%;
	}
	.fw-col-md-push-5 {
		left: 41.66666667%;
	}
	.fw-col-md-push-4 {
		left: 33.33333333%;
	}
	.fw-col-md-push-3 {
		left: 25%;
	}
	.fw-col-md-push-2 {
		left: 16.66666667%;
	}
	.fw-col-md-push-1 {
		left: 8.33333333%;
	}
	.fw-col-md-push-0 {
		left: auto;
	}
	.fw-col-md-offset-12 {
		margin-left: 100%;
	}
	.fw-col-md-offset-11 {
		margin-left: 91.66666667%;
	}
	.fw-col-md-offset-10 {
		margin-left: 83.33333333%;
	}
	.fw-col-md-offset-9 {
		margin-left: 75%;
	}
	.fw-col-md-offset-8 {
		margin-left: 66.66666667%;
	}
	.fw-col-md-offset-7 {
		margin-left: 58.33333333%;
	}
	.fw-col-md-offset-6 {
		margin-left: 50%;
	}
	.fw-col-md-offset-5 {
		margin-left: 41.66666667%;
	}
	.fw-col-md-offset-4 {
		margin-left: 33.33333333%;
	}
	.fw-col-md-offset-3 {
		margin-left: 25%;
	}
	.fw-col-md-offset-2 {
		margin-left: 16.66666667%;
	}
	.fw-col-md-offset-1 {
		margin-left: 8.33333333%;
	}
	.fw-col-md-offset-0 {
		margin-left: 0%;
	}
}
@media (min-width: 1200px) {
	.fw-col-lg-1, .fw-col-lg-2, .fw-col-lg-3, .fw-col-lg-4, .fw-col-lg-5, .fw-col-lg-6, .fw-col-lg-7, .fw-col-lg-8, .fw-col-lg-9, .fw-col-lg-10, .fw-col-lg-11, .fw-col-lg-12,
	.fw-col-md-1-5,
	.fw-col-sm-1-5 {
		float: left;
	}
	.fw-col-lg-12 {
		width: 100%;
	}
	.fw-col-lg-11 {
		width: 91.66666667%;
	}
	.fw-col-lg-10 {
		width: 83.33333333%;
	}
	.fw-col-lg-9 {
		width: 75%;
	}
	.fw-col-lg-8 {
		width: 66.66666667%;
	}
	.fw-col-lg-7 {
		width: 58.33333333%;
	}
	.fw-col-lg-6 {
		width: 50%;
	}
	.fw-col-lg-5 {
		width: 41.66666667%;
	}
	.fw-col-lg-4 {
		width: 33.33333333%;
	}
	.fw-col-lg-3 {
		width: 25%;
	}
	.fw-col-lg-2 {
		width: 16.66666667%;
	}
	.fw-col-lg-1 {
		width: 8.33333333%;
	}
	.fw-col-lg-pull-12 {
		right: 100%;
	}
	.fw-col-lg-pull-11 {
		right: 91.66666667%;
	}
	.fw-col-lg-pull-10 {
		right: 83.33333333%;
	}
	.fw-col-lg-pull-9 {
		right: 75%;
	}
	.fw-col-lg-pull-8 {
		right: 66.66666667%;
	}
	.fw-col-lg-pull-7 {
		right: 58.33333333%;
	}
	.fw-col-lg-pull-6 {
		right: 50%;
	}
	.fw-col-lg-pull-5 {
		right: 41.66666667%;
	}
	.fw-col-lg-pull-4 {
		right: 33.33333333%;
	}
	.fw-col-lg-pull-3 {
		right: 25%;
	}
	.fw-col-lg-pull-2 {
		right: 16.66666667%;
	}
	.fw-col-lg-pull-1 {
		right: 8.33333333%;
	}
	.fw-col-lg-pull-0 {
		right: auto;
	}
	.fw-col-lg-push-12 {
		left: 100%;
	}
	.fw-col-lg-push-11 {
		left: 91.66666667%;
	}
	.fw-col-lg-push-10 {
		left: 83.33333333%;
	}
	.fw-col-lg-push-9 {
		left: 75%;
	}
	.fw-col-lg-push-8 {
		left: 66.66666667%;
	}
	.fw-col-lg-push-7 {
		left: 58.33333333%;
	}
	.fw-col-lg-push-6 {
		left: 50%;
	}
	.fw-col-lg-push-5 {
		left: 41.66666667%;
	}
	.fw-col-lg-push-4 {
		left: 33.33333333%;
	}
	.fw-col-lg-push-3 {
		left: 25%;
	}
	.fw-col-lg-push-2 {
		left: 16.66666667%;
	}
	.fw-col-lg-push-1 {
		left: 8.33333333%;
	}
	.fw-col-lg-push-0 {
		left: auto;
	}
	.fw-col-lg-offset-12 {
		margin-left: 100%;
	}
	.fw-col-lg-offset-11 {
		margin-left: 91.66666667%;
	}
	.fw-col-lg-offset-10 {
		margin-left: 83.33333333%;
	}
	.fw-col-lg-offset-9 {
		margin-left: 75%;
	}
	.fw-col-lg-offset-8 {
		margin-left: 66.66666667%;
	}
	.fw-col-lg-offset-7 {
		margin-left: 58.33333333%;
	}
	.fw-col-lg-offset-6 {
		margin-left: 50%;
	}
	.fw-col-lg-offset-5 {
		margin-left: 41.66666667%;
	}
	.fw-col-lg-offset-4 {
		margin-left: 33.33333333%;
	}
	.fw-col-lg-offset-3 {
		margin-left: 25%;
	}
	.fw-col-lg-offset-2 {
		margin-left: 16.66666667%;
	}
	.fw-col-lg-offset-1 {
		margin-left: 8.33333333%;
	}
	.fw-col-lg-offset-0 {
		margin-left: 0%;
	}
}
@media (min-width: 992px) {
	.fw-col-md-1-5 {
		width: 20%;
	}
}
/* Grid system End */

