import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../_framework/reified.js";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRateLimiterConfig(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::rate_limiter::RateLimiterConfig`;
}

export interface RateLimiterConfigFields {
  windowDuration: ToField<"u64">;
  maxOutflow: ToField<"u64">;
}

export type RateLimiterConfigReified = Reified<RateLimiterConfig, RateLimiterConfigFields>;

/**
 * Move struct: `RateLimiterConfig`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::rate_limiter`
 */
export class RateLimiterConfig implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::rate_limiter::RateLimiterConfig`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = RateLimiterConfig.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::rate_limiter::RateLimiterConfig`;
  readonly $typeArgs: [];
  readonly $isPhantom = RateLimiterConfig.$isPhantom;

  readonly windowDuration: ToField<"u64">;
  readonly maxOutflow: ToField<"u64">;

  private constructor(typeArgs: [], fields: RateLimiterConfigFields) {
    this.$fullTypeName = composeSuiType(
      RateLimiterConfig.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::rate_limiter::RateLimiterConfig`;
    this.$typeArgs = typeArgs;

    this.windowDuration = fields.windowDuration;
    this.maxOutflow = fields.maxOutflow;
  }

  static reified(): RateLimiterConfigReified {
    return {
      typeName: RateLimiterConfig.$typeName,
      fullTypeName: composeSuiType(
        RateLimiterConfig.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::rate_limiter::RateLimiterConfig`,
      typeArgs: [] as [],
      isPhantom: RateLimiterConfig.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => RateLimiterConfig.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => RateLimiterConfig.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RateLimiterConfig.fromBcs(data),
      bcs: RateLimiterConfig.bcs,
      fromJSONField: (field: any) => RateLimiterConfig.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RateLimiterConfig.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => RateLimiterConfig.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => RateLimiterConfig.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => RateLimiterConfig.fetch(client, id),
      new: (fields: RateLimiterConfigFields) => {
        return new RateLimiterConfig([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RateLimiterConfig.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<RateLimiterConfig>> {
    return phantom(RateLimiterConfig.reified());
  }
  static get p() {
    return RateLimiterConfig.phantom();
  }

  static get bcs() {
    return bcs.struct("RateLimiterConfig", {
      window_duration: bcs.u64(),
      max_outflow: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): RateLimiterConfig {
    return RateLimiterConfig.reified().new({
      windowDuration: decodeFromFields("u64", fields.window_duration),
      maxOutflow: decodeFromFields("u64", fields.max_outflow),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RateLimiterConfig {
    if (!isRateLimiterConfig(item.type)) {
      throw new Error("not a RateLimiterConfig type");
    }

    return RateLimiterConfig.reified().new({
      windowDuration: decodeFromFieldsWithTypes("u64", item.fields.window_duration),
      maxOutflow: decodeFromFieldsWithTypes("u64", item.fields.max_outflow),
    });
  }

  static fromBcs(data: Uint8Array): RateLimiterConfig {
    return RateLimiterConfig.fromFields(RateLimiterConfig.bcs.parse(data));
  }

  toJSONField() {
    return {
      windowDuration: this.windowDuration.toString(),
      maxOutflow: this.maxOutflow.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): RateLimiterConfig {
    return RateLimiterConfig.reified().new({
      windowDuration: decodeFromJSONField("u64", field.windowDuration),
      maxOutflow: decodeFromJSONField("u64", field.maxOutflow),
    });
  }

  static fromJSON(json: Record<string, any>): RateLimiterConfig {
    if (json.$typeName !== RateLimiterConfig.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return RateLimiterConfig.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): RateLimiterConfig {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRateLimiterConfig(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a RateLimiterConfig object`);
    }
    return RateLimiterConfig.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): RateLimiterConfig {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRateLimiterConfig(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a RateLimiterConfig object`);
      }

      return RateLimiterConfig.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RateLimiterConfig.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<RateLimiterConfig> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching RateLimiterConfig object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isRateLimiterConfig(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a RateLimiterConfig object`);
    }

    return RateLimiterConfig.fromSuiObjectData(res.data);
  }
}
