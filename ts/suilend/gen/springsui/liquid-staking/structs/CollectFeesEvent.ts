import { TypeName } from "../../../_dependencies/onchain/0x1/type-name/structs/index.js";
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

export function isCollectFeesEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquid_staking::CollectFeesEvent`;
}

export interface CollectFeesEventFields {
  typename: ToField<TypeName>;
  amount: ToField<"u64">;
}

export type CollectFeesEventReified = Reified<CollectFeesEvent, CollectFeesEventFields>;

/**
 * Move struct: `CollectFeesEvent`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 */
export class CollectFeesEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquid_staking::CollectFeesEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = CollectFeesEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquid_staking::CollectFeesEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = CollectFeesEvent.$isPhantom;

  readonly typename: ToField<TypeName>;
  readonly amount: ToField<"u64">;

  private constructor(typeArgs: [], fields: CollectFeesEventFields) {
    this.$fullTypeName = composeSuiType(
      CollectFeesEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquid_staking::CollectFeesEvent`;
    this.$typeArgs = typeArgs;

    this.typename = fields.typename;
    this.amount = fields.amount;
  }

  static reified(): CollectFeesEventReified {
    return {
      typeName: CollectFeesEvent.$typeName,
      fullTypeName: composeSuiType(
        CollectFeesEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquid_staking::CollectFeesEvent`,
      typeArgs: [] as [],
      isPhantom: CollectFeesEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => CollectFeesEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => CollectFeesEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CollectFeesEvent.fromBcs(data),
      bcs: CollectFeesEvent.bcs,
      fromJSONField: (field: any) => CollectFeesEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CollectFeesEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => CollectFeesEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => CollectFeesEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => CollectFeesEvent.fetch(client, id),
      new: (fields: CollectFeesEventFields) => {
        return new CollectFeesEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CollectFeesEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<CollectFeesEvent>> {
    return phantom(CollectFeesEvent.reified());
  }
  static get p() {
    return CollectFeesEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("CollectFeesEvent", {
      typename: TypeName.bcs,
      amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): CollectFeesEvent {
    return CollectFeesEvent.reified().new({
      typename: decodeFromFields(TypeName.reified(), fields.typename),
      amount: decodeFromFields("u64", fields.amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CollectFeesEvent {
    if (!isCollectFeesEvent(item.type)) {
      throw new Error("not a CollectFeesEvent type");
    }

    return CollectFeesEvent.reified().new({
      typename: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.typename),
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
    });
  }

  static fromBcs(data: Uint8Array): CollectFeesEvent {
    return CollectFeesEvent.fromFields(CollectFeesEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      typename: this.typename.toJSONField(),
      amount: this.amount.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): CollectFeesEvent {
    return CollectFeesEvent.reified().new({
      typename: decodeFromJSONField(TypeName.reified(), field.typename),
      amount: decodeFromJSONField("u64", field.amount),
    });
  }

  static fromJSON(json: Record<string, any>): CollectFeesEvent {
    if (json.$typeName !== CollectFeesEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return CollectFeesEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): CollectFeesEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCollectFeesEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a CollectFeesEvent object`);
    }
    return CollectFeesEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): CollectFeesEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isCollectFeesEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a CollectFeesEvent object`);
      }

      return CollectFeesEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CollectFeesEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<CollectFeesEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching CollectFeesEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isCollectFeesEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a CollectFeesEvent object`);
    }

    return CollectFeesEvent.fromSuiObjectData(res.data);
  }
}
