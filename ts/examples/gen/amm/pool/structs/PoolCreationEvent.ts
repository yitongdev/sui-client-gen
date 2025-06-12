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
import { ID } from "../../../sui/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPoolCreationEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::pool::PoolCreationEvent`;
}

export interface PoolCreationEventFields {
  poolId: ToField<ID>;
}

export type PoolCreationEventReified = Reified<PoolCreationEvent, PoolCreationEventFields>;

/**
 * Move struct: `PoolCreationEvent`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 */
export class PoolCreationEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::pool::PoolCreationEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PoolCreationEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::pool::PoolCreationEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = PoolCreationEvent.$isPhantom;

  readonly poolId: ToField<ID>;

  private constructor(typeArgs: [], fields: PoolCreationEventFields) {
    this.$fullTypeName = composeSuiType(
      PoolCreationEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::pool::PoolCreationEvent`;
    this.$typeArgs = typeArgs;

    this.poolId = fields.poolId;
  }

  static reified(): PoolCreationEventReified {
    return {
      typeName: PoolCreationEvent.$typeName,
      fullTypeName: composeSuiType(
        PoolCreationEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::pool::PoolCreationEvent`,
      typeArgs: [] as [],
      isPhantom: PoolCreationEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PoolCreationEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PoolCreationEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolCreationEvent.fromBcs(data),
      bcs: PoolCreationEvent.bcs,
      fromJSONField: (field: any) => PoolCreationEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolCreationEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PoolCreationEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => PoolCreationEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => PoolCreationEvent.fetch(client, id),
      new: (fields: PoolCreationEventFields) => {
        return new PoolCreationEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PoolCreationEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PoolCreationEvent>> {
    return phantom(PoolCreationEvent.reified());
  }
  static get p() {
    return PoolCreationEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("PoolCreationEvent", {
      pool_id: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): PoolCreationEvent {
    return PoolCreationEvent.reified().new({
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolCreationEvent {
    if (!isPoolCreationEvent(item.type)) {
      throw new Error("not a PoolCreationEvent type");
    }

    return PoolCreationEvent.reified().new({
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
    });
  }

  static fromBcs(data: Uint8Array): PoolCreationEvent {
    return PoolCreationEvent.fromFields(PoolCreationEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      poolId: this.poolId,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): PoolCreationEvent {
    return PoolCreationEvent.reified().new({
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
    });
  }

  static fromJSON(json: Record<string, any>): PoolCreationEvent {
    if (json.$typeName !== PoolCreationEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PoolCreationEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PoolCreationEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPoolCreationEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PoolCreationEvent object`);
    }
    return PoolCreationEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PoolCreationEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPoolCreationEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a PoolCreationEvent object`);
      }

      return PoolCreationEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PoolCreationEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PoolCreationEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching PoolCreationEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isPoolCreationEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PoolCreationEvent object`);
    }

    return PoolCreationEvent.fromSuiObjectData(res.data);
  }
}
